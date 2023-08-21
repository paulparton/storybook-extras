const preview = require.resolve('./preview');
export default {
    previewAnnotations: (entries = []) => [...entries, preview],
};
//# sourceMappingURL=preset.js.map