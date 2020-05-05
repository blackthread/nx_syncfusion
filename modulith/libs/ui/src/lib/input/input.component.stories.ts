import { text, number, boolean } from '@storybook/addon-knobs';
import { InputComponent } from './input.component';

export default {
  title: 'InputComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: InputComponent,
  props: {
    label: text('label', 'Label'),
    placeholder: text('placeholder', 'Placeholder'),
    disabled: boolean('disabled', false),
  }
})
