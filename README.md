# DatoCMS plugin: Auto ID

Automatically generates a UUID for single-line string fields in the DatoCMS editor, and keeps the value read-only there.

## Features

- Generates a UUID v4 when a new record is opened in the editor
- Field is read-only in the editor, including on the creation screen
- Does not affect API writes
- Duplicating a record creates a fresh UUID
- Works as a field **editor** replacement for `string` fields
- No plugin permissions required

## Installation

### Marketplace

1. Open **Project Settings → Plugins**
2. Search for **Auto ID** and install it
3. Open your model field → **Presentation**
4. Set the field editor to **Auto ID**

### Local development

```bash
npm install
npm run dev
```

Then add a private plugin in DatoCMS with entry point `http://localhost:5173`.

## Usage

Use this plugin on a single-line string field that should act as an immutable identifier, for example `external_id` or `reference_id`.

When a user creates a new record in the editor:

1. The plugin assigns a UUID automatically
2. The field is shown as disabled/read-only
3. After save, the same UUID remains visible and still cannot be edited

Duplicating a record also generates a fresh UUID, even if DatoCMS pre-fills the field from the source record.

API-created or API-updated records are not modified by the plugin.

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
