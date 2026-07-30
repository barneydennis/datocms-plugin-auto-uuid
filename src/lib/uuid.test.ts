import { describe, expect, it } from 'vitest';
import {
  generateUuid,
  getPersistedFieldValue,
  isUuidV4,
  shouldGenerateUuid,
} from './uuid';

describe('generateUuid', () => {
  it('returns a valid UUID v4 string', () => {
    expect(isUuidV4(generateUuid())).toBe(true);
  });

  it('returns unique values', () => {
    const first = generateUuid();
    const second = generateUuid();

    expect(first).not.toBe(second);
  });
});

describe('shouldGenerateUuid', () => {
  it('generates only for new records', () => {
    expect(shouldGenerateUuid('new')).toBe(true);
    expect(shouldGenerateUuid('draft')).toBe(false);
    expect(shouldGenerateUuid('updated')).toBe(false);
    expect(shouldGenerateUuid('published')).toBe(false);
  });
});

describe('getPersistedFieldValue', () => {
  it('returns a string value when present', () => {
    expect(getPersistedFieldValue('abc-123')).toBe('abc-123');
  });

  it('returns an empty string for non-string values', () => {
    expect(getPersistedFieldValue(null)).toBe('');
    expect(getPersistedFieldValue(undefined)).toBe('');
    expect(getPersistedFieldValue(42)).toBe('');
  });
});
