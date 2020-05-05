generate a workspace


npm -D install @nrwl/storybook
nx g @nrwl/angular:storybook-configuration ui
nx g component input --project=ui --export
nx run ui:storybook
npm i tailwindcss postcss-import postcss-loader postcss-scss @angular-builders/custom-webpack -D
Add Tailwind imports to style.scss
@tailwind base;  
@tailwind components;  
@tailwind utilities;
npx tailwind init

