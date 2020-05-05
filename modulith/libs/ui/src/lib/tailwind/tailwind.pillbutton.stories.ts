import { text, number, boolean } from '@storybook/addon-knobs';
import { TailwindComponent } from './tailwind.component';

export default {
  title: 'TailWind'
};

export const primary = () => ({
         moduleMetadata: {
           imports: []
         },
         component: TailwindComponent

       });
