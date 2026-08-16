// Progressive enhancement for the package table.
//
// The Scriban model that package-list-action hands to these templates only
// exposes Name / DisplayName / Version / ZipUrl / License / ... — it does NOT
// expose documentationUrl or changelogUrl. Those fields do survive into the
// generated index.json, so we read them back from there at runtime and upgrade
// the statically rendered "Docs" link (which falls back to the GitHub repo).
//
// NOTE: this file is itself rendered by Scriban before publishing, so it must
// never contain a doubled opening brace -- that opens a template block and the
// rest of the file gets parsed as template script, failing the build.

(function () {
  "use strict";

  var cells = document.querySelectorAll("td.links[data-package]");
  if (cells.length === 0) return;

  function compareVersions(a, b) {
    var pa = String(a).split("-")[0].split(".");
    var pb = String(b).split("-")[0].split(".");
    for (var i = 0; i < 3; i++) {
      var na = parseInt(pa[i], 10) || 0;
      var nb = parseInt(pb[i], 10) || 0;
      if (na !== nb) return na - nb;
    }
    // A release beats its own prereleases (1.0.0 > 1.0.0-beta.1).
    var ra = String(a).indexOf("-") === -1;
    var rb = String(b).indexOf("-") === -1;
    if (ra !== rb) return ra ? 1 : -1;
    return String(a).localeCompare(String(b));
  }

  function latestVersion(versions) {
    var keys = Object.keys(versions || {});
    if (keys.length === 0) return null;
    keys.sort(compareVersions);
    return versions[keys[keys.length - 1]];
  }

  function link(href, text) {
    var a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.rel = "noopener";
    return a;
  }

  fetch("index.json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("index.json: " + res.status);
      return res.json();
    })
    .then(function (listing) {
      var packages = (listing && listing.packages) || {};

      cells.forEach(function (cell) {
        var entry = packages[cell.dataset.package];
        var manifest = entry && latestVersion(entry.versions);
        if (!manifest) return;

        var repo = cell.dataset.repo;
        var docs = manifest.documentationUrl || (repo ? repo + "#readme" : null);
        var changelog = manifest.changelogUrl;
        if (!docs && !changelog) return;

        cell.textContent = "";
        if (docs) cell.appendChild(link(docs, "Docs"));
        if (changelog) cell.appendChild(link(changelog, "Changelog"));
      });
    })
    .catch(function (err) {
      // Keep the statically rendered fallback links on failure.
      console.warn("Could not enrich package links:", err);
    });
})();
