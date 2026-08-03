import type { RenderFieldExtensionCtx } from 'datocms-plugin-sdk';
import { Canvas, TextInput } from 'datocms-react-ui';
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
      <TextInput
        id={ctx.fieldPath}
        name={ctx.fieldPath}
        value={value}
        onChange={() => undefined}
        disabled
        readOnly
      />
    </Canvas>
  );
}
