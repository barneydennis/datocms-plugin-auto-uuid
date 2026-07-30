import type { RenderFieldExtensionCtx } from 'datocms-plugin-sdk';
import { Canvas, TextField } from 'datocms-react-ui';
import { useEffect, useState } from 'react';
import { getValueAtFieldPath } from '../lib/formValues';
import { generateUuid, getPersistedFieldValue } from '../lib/uuid';

type Props = {
  ctx: RenderFieldExtensionCtx;
};

export default function AutoUuidField({ ctx }: Props) {
  const [newRecordUuid] = useState(() => generateUuid());
  const currentValue = getValueAtFieldPath(ctx.formValues, ctx.fieldPath);

  const value =
    ctx.itemStatus === 'new'
      ? newRecordUuid
      : getPersistedFieldValue(currentValue);

  useEffect(() => {
    if (ctx.itemStatus === 'new' && currentValue !== newRecordUuid) {
      void ctx.setFieldValue(ctx.fieldPath, newRecordUuid);
    }
  }, [ctx, currentValue, newRecordUuid]);

  return (
    <Canvas ctx={ctx}>
      <TextField
        id={ctx.fieldPath}
        name={ctx.fieldPath}
        label={ctx.field.attributes.label}
        hint={ctx.field.attributes.hint ?? undefined}
        value={value}
        onChange={() => undefined}
        textInputProps={{ disabled: true, readOnly: true }}
      />
    </Canvas>
  );
}
