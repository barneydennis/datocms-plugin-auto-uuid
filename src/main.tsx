import { connect } from 'datocms-plugin-sdk';
import 'datocms-react-ui/styles.css';
import AutoUuidField from './entrypoints/AutoUuidField';
import ConfigScreen from './entrypoints/ConfigScreen';
import { render } from './utils/render';

connect({
  manualFieldExtensions() {
    return [
      {
        id: 'autoUuid',
        name: 'Auto UUID',
        type: 'editor',
        fieldTypes: ['string'],
      },
    ];
  },
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  renderFieldExtension(fieldExtensionId, ctx) {
    if (fieldExtensionId === 'autoUuid') {
      render(<AutoUuidField ctx={ctx} />);
    }
  },
});
