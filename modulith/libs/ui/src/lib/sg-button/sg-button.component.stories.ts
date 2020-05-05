import { text, boolean } from '@storybook/addon-knobs';
import { SgButtonComponent } from './sg-button.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

export default {
  title: 'Selligent Button'
}

export const Default = () => ({
         moduleMetadata: {
           imports: [ButtonModule]
         },
         // component: SgButtonComponent
         template: `<button ejs-button iconCss= "e-btn-sb-icon e-stop-icon" iconPosition="Right">Stop</button>`
       });
//template: `<button ejs-button cssClass="e-primary">Test</button>`

export const disabled_primary_button = () => ({
  moduleMetadata: {
    imports: [ButtonModule]
  },
  component: SgButtonComponent,
   props: {
           text: 'primary',
           mycss: '',
           disabled: true
         }
});


export const positive_action = () => ({
         moduleMetadata: {
           imports: [ButtonModule]
         },
         component: SgButtonComponent,
         props: {
           text: 'Success',
           mycss: 'e-success'
         }
       });

       export const informative_action = () => ({
                moduleMetadata: {
                  imports: [ButtonModule]
                },
                component: SgButtonComponent,
                props: {
                  text: 'Informative',
                  mycss: 'e-info'
                }
              });

export const caution_action = () => ({
         moduleMetadata: {
           imports: [ButtonModule]
         },
         component: SgButtonComponent,
         props: {
           text: 'Warning',
           mycss: 'e-warning'
         }
       });

export const negative_action = () => ({
         moduleMetadata: {
           imports: [ButtonModule]
         },
         component: SgButtonComponent,
         props: {
           text: 'Danger',
           mycss: 'e-danger'
         }
       });

export const hyperlink_action = () => ({
         moduleMetadata: {
           imports: [ButtonModule]
         },
         component: SgButtonComponent,
         props: {
           text: 'HyperLink',
           mycss: 'e-link'
         }
       });

export const flat_button = () => ({
  moduleMetadata: {
    imports: [ButtonModule]
  },
  component: SgButtonComponent,
  props: {
    text: 'flat',
    mycss: 'e-flat'
  }
});

export const outline_button = () => ({
         moduleMetadata: {
           imports: [ButtonModule]
         },
         component: SgButtonComponent,
         props: {
           text: 'outline',
           mycss: 'e-outline'
         }
       });
export const round_button = () => ({
         moduleMetadata: {
           imports: [ButtonModule]
         },
         component: SgButtonComponent,
         props: {
           text: '',
           mycss: 'e-round',
           iconcss: 'e-icons e-plus-icon'
         }
       });

       export const Block_button_Success = () => ({
                moduleMetadata: {
                  imports: [ButtonModule]
                },
                component: SgButtonComponent,
                props: {
                  text: 'Succes',
                  mycss: 'e-block e-success'
                }
              });
       export const Block_button_primary = () => ({
         moduleMetadata: {
           imports: [ButtonModule]
         },
         component: SgButtonComponent,
         props: {
           text: 'Succes',
           mycss: 'e-block'
         }
       });

 export const Icon_button = () => ({
          moduleMetadata: {
            imports: [ButtonModule]
          },
          component: SgButtonComponent,
          props: {
            text: 'Success'
          }
        });
