import capitalize from 'lodash/capitalize';

export default function kebabCaseToCapitalize(str: string) {
    return capitalize(str).replace(/-/g, ' ');
}
