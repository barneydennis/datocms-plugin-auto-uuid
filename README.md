# DatoCMS plugin: Auto UUID

Automatically generates a UUID for single-line string fields when a record is created, and keeps the value read-only in the DatoCMS editor.

## Features

- Generates a UUID v4 when a new record is opened in the editor
- Field is never editable by users, including on the creation screen
- Works as a field **editor** replacement for `string` fields
- No plugin permissions required

## Installation

### Marketplace

1. Open **Project Settings → Plugins**
2. Search for **Auto UUID** and install it
3. Open your model field → **Presentation**
4. Set the field editor to **Auto UUID**

### Local development

```bash
npm install
npm run dev
```

Then add a private plugin in DatoCMS with entry point `http://localhost:5173`.

## Usage

Use this plugin on a single-line string field that should act as an immutable identifier, for example `external_id` or `reference_id`.

When a user creates a new record:

1. The plugin assigns a UUID automatically
2. The field is shown as disabled/read-only
3. After save, the same UUID remains visible and still cannot be edited

Duplicating a record counts as a new record, so a fresh UUID is generated even if DatoCMS pre-fills the field from the source record.

## Development

```bash
npm run dev
npm test
npm run build
```

## Publishing to the Marketplace

Before publishing, add:

- `docs/cover-1200x800.png` — 1200×800 marketplace cover image
- `docs/preview.png` — marketplace preview image (replace with a short demo video later if you prefer)

Then publish to npm:

```bash
npm publish
```

The plugin should appear in the DatoCMS Marketplace within about an hour.

## License

MIT
