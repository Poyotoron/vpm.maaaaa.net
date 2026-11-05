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
| [Poyo's Asset Cleaner](https://github.com/Poyotoron/Asset-Cleaner) | `net.maaaaa.asset-cleaner` | どのアバターからも使われていないアセットを見つけ、プロジェクトの外へ退避します。退避したものは元に戻せます。 |
| [Poyo's Reference Fixer](https://github.com/Poyotoron/Ref-Fixer) | `net.maaaaa.ref-fixer` | Prefab の壊れた参照（Missing）を調べ、参照先の候補を探して直します。 |
| [Poyo's Avatar Toolbox](https://github.com/Poyotoron/Avatar-Toolbox) | `net.maaaaa.avatar-toolbox` | アバター改変を手伝う小さなツールの詰め合わせです。使うツールだけを有効にできます。 |
| [EXQv](https://github.com/Poyotoron/EXQv) | `net.maaaaa.exqv` | QvPen で描いた線を、アバターの体に追従させたり（BodyQv）、手で持てるようにしたり（GrabQv）するワールド用の拡張です。 |
| [Poyo's Face Util](https://github.com/Poyotoron/Face-Util) | `net.maaaaa.face-util` | アバターの表情（ブレンドシェイプ）を、PC のスライダーから OSC で動かします。 |
| [Poyo's Editor Toolbox](https://github.com/Poyotoron/Editor-Toolbox) | `net.maaaaa.editor-toolbox` | Unity エディタの使い勝手を整える小さな機能の詰め合わせです。機能ごとに ON / OFF できます。 |

> パッケージを追加したら、この表を更新してください。
