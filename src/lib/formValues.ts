export function getValueAtFieldPath(
  formValues: Record<string, unknown>,
  fieldPath: string,
): unknown {
  return formValues[fieldPath];
}
