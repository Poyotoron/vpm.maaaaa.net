# Poyo's VPM Repo

VRChat 向けの VPM パッケージリスティングです。VCC / vrc-get(ALCOM) にこのリポジトリを追加すると、収録パッケージのインストールと更新ができます。

**リスティング URL**

```
https://vpm.maaaaa.net/index.json
```

公開ページ: https://vpm.maaaaa.net

## インストール方法

### VCC (VRChat Creator Companion) の場合

- **ワンクリック**: [Add to VCC](https://vpm.maaaaa.net) ページの「Add to VCC」ボタン、または次のリンクを開く
  → `vcc://vpm/addRepo?url=https://vpm.maaaaa.net/index.json`
- **手動で追加**:
  1. VCC を開き **Settings → Packages** を開く
  2. **Add Repository** をクリック
  3. 上記の **リスティング URL** を貼り付けて **Add**
  4. 内容を確認して **I Understand**

追加後、各プロジェクトの **Manage Project → Manage Packages** から収録パッケージをインストールできます。

### vrc-get / ALCOM の場合

```sh
vrc-get repo add https://vpm.maaaaa.net/index.json
```

追加後、プロジェクトでパッケージ名を指定してインストールします。

```sh
vrc-get install <package-id>
```

## パッケージ一覧

| パッケージ | ID | 説明 |
| --- | --- | --- |
| [いらないアセット消しちゃうもんネーター](https://github.com/Poyotoron/Asset-Keshichaumon-Nator) | `net.maaaaa.asset-keshichaumon-nator` | アバターから参照されていない未使用アセットを検出し、安全に退避します。 |

> パッケージを追加したら、この表を更新してください。
