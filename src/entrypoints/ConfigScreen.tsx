import type { RenderConfigScreenCtx } from 'datocms-plugin-sdk';
import { Canvas, Section } from 'datocms-react-ui';

type Props = {
  ctx: RenderConfigScreenCtx;
};

export default function ConfigScreen({ ctx }: Props) {
  return (
    <Canvas ctx={ctx}>
      <Section title="Auto UUID">
        <p>
          Install this plugin as a <strong>field editor</strong> on any single-line
          string field that should receive an immutable UUID when a record is created.
        </p>
        <p>
          New records get a UUID automatically. The field stays read-only in the
          editor, including during creation.
        </p>
      </Section>
    </Canvas>
  );
}
