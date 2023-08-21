import { PARAM_KEY } from './types';
import { withVariants } from './decorators/withVariants.decorator';
export const decorators = [withVariants()];
export const parameters = {
    [PARAM_KEY]: {
        enable: false,
    },
    toolbars: [
        {
            key: 'variants',
            title: 'Variants',
            // icon: 'user',
            emoji: '👿',
            isDisabled: (globals, parameter) => {
                return parameter?.autoCalculate || parameter?.include?.length;
            },
        },
    ],
};
export const globals = {
    [PARAM_KEY]: null,
};
//# sourceMappingURL=preview.js.map