import { storiesOf } from '@storybook/vue';
import ColorButton from '../components/ColorButton';
import Tooltip from '../components/Tooltip';
import ColorList from '../components/ColorList';
import SlideShow from '../components/SlideShow';
import ColorPicker from '../components/ColorPicker';

export const itemInfo = {
  id: '0',
  title: 'PLA Orange blue',
  type: 'RAL 2008',
  weight: '750 g',
  color: 'orange',
};

storiesOf('ColorButton', module)
  .add('default', () => {
    return {
      components: { ColorButton },
      template: `<ColorButton :itemInfo="itemInfo" />`,
      data: () => ({ itemInfo }),
    };
  })
  .add('selected', () => {
    return {
      components: { ColorButton },
      template: `<ColorButton :itemInfo="itemInfo" isSelected/>`,
      data: () => ({ itemInfo }),
    };
  });

export const tooltipInfos = {
  title: 'PLA Orange',
  type: 'RAL 2008',
  weight: '750 g',
};

storiesOf('Tooltip', module).add('default', () => {
  return {
    components: { Tooltip },
    template: `<div style="position: relative;margin: 100px;"><Tooltip :info="tooltipInfos"  /></div>`,
    data: () => ({ tooltipInfos }),
  };
});

export const items = [
  {
    id: '0',
    title: 'PLA Blue',
    type: 'RAL 5002',
    weight: '750 g',
    color: 'blue',
  },
  {
    id: '1',
    title: 'PLA Magenta',
    type: 'RAL 4010',
    weight: '750 g',
    color: 'magenta',
  },
  {
    id: '2',
    title: 'PLA Red',
    type: 'RAL 3020',
    weight: '750 g',
    color: 'red',
  },
  {
    id: '3',
    title: 'PLA Orange',
    type: 'RAL 2008',
    weight: '750 g',
    color: 'orange',
  },
  {
    id: '4',
    title: 'PLA Yellow',
    type: 'RAL 1003',
    weight: '750 g',
    color: 'yellow',
  },
  {
    id: '5',
    title: 'PLA Green',
    type: 'RAL 6018',
    weight: '750 g',
    color: 'green',
  },
  {
    id: '6',
    title: 'PLA Pearl White',
    type: 'RAL 1013',
    weight: '750 g',
    color: 'pearl',
  },
  {
    id: '7',
    title: 'PLA White',
    type: 'RAL 9010',
    weight: '750 g',
    color: 'white',
  },
  {
    id: '8',
    title: 'PLA Silver Metallic',
    type: 'RAL 9006',
    weight: '750 g',
    color: 'silver',
  },
  {
    id: '9',
    title: 'PLA Black',
    type: 'RAL 9005',
    weight: '750 g',
    color: 'silver',
  },
  {
    id: '10',
    title: 'PLA Transparent',
    type: 'RAL n/a',
    weight: '750 g',
    color: 'transparent',
  },
];

storiesOf('ColorList', module).add('default', () => {
  return {
    components: { ColorList },
    template: `<div style="margin:100px 0px 0px 100px;"><ColorList :items="items"  /></div>`,
    data: () => ({ items }),
  };
});

export const images = [
  {
    id: 0,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Blue@2x.png',
    color: 'blue',
    alt: 'PLA Blue',
  },
  {
    id: 1,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Magenta@2x.png',
    color: 'magenta',
    alt: 'PLA Magenta',
  },
  {
    id: 2,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Red@2x.png',
    color: 'red',
    alt: 'PLA Red',
  },
  {
    id: 3,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Orange@2x.png',
    color: 'orange',
    alt: 'PLA Orange',
  },
  {
    id: 4,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Yellow@2x.png',
    color: 'yellow',
    alt: 'PLA Yellow',
  },
  {
    id: 5,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Green@2x.png',
    color: 'green',
    alt: 'PLA Green',
  },
  {
    id: 6,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Pearl-White@2x.png',
    color: 'pearl',
    alt: 'PLA Pearl White',
  },
  {
    id: 7,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-White@2x.png',
    color: 'white',
    alt: 'PLA White',
  },
  {
    id: 8,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Silver-Metallic@2x.png',
    color: 'silver',
    alt: 'PLA Silver Metallic',
  },
  {
    id: 9,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Black@2x.png',
    color: 'black',
    alt: 'PLA Black',
  },
  {
    id: 10,
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Transparent@2x.png',
    color: 'transparent',
    alt: 'PLA Transparent',
  },
];

export const selectedId = 0;

storiesOf('SlideShow', module).add('default', () => {
  return {
    components: { SlideShow },
    template:
      '<div style="width:700px"><SlideShow :images="images" :selectedId="selectedId" /></div>',
    data: () => ({ images, selectedId }),
  };
});

// Color Picker

export const itemsFull = [
  {
    id: 0,
    title: 'PLA Blue',
    type: 'RAL 5002',
    weight: '750 g',
    color: 'blue',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Blue@2x.png',
  },
  {
    id: 1,
    title: 'PLA Magenta',
    type: 'RAL 4010',
    weight: '750 g',
    color: 'magenta',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Magenta@2x.png',
  },
  {
    id: 2,
    title: 'PLA Red',
    type: 'RAL 3020',
    weight: '750 g',
    color: 'red',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Red@2x.png',
  },
  {
    id: 3,
    title: 'PLA Orange',
    type: 'RAL 2008',
    weight: '750 g',
    color: 'orange',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Orange@2x.png',
  },
  {
    id: 4,
    title: 'PLA Yellow',
    type: 'RAL 1003',
    weight: '750 g',
    color: 'yellow',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Yellow@2x.png',
  },
  {
    id: 5,
    title: 'PLA Green',
    type: 'RAL 6018',
    weight: '750 g',
    color: 'green',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Green@2x.png',
  },
  {
    id: 6,
    title: 'PLA Pearl White',
    type: 'RAL 1013',
    weight: '750 g',
    color: 'pearl',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Pearl-White@2x.png',
  },
  {
    id: 7,
    title: 'PLA White',
    type: 'RAL 9010',
    weight: '750 g',
    color: 'white',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-White@2x.png',
  },
  {
    id: 8,
    title: 'PLA Silver Metallic',
    type: 'RAL 9006',
    weight: '750 g',
    color: 'silver',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Silver-Metallic@2x.png',
  },
  {
    id: 9,
    title: 'PLA Black',
    type: 'RAL 9005',
    weight: '750 g',
    color: 'silver',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Black@2x.png',
  },
  {
    id: 10,
    title: 'PLA Transparent',
    type: 'RAL n/a',
    weight: '750 g',
    color: 'transparent',
    url:
      'https://ultimaker.com/img/materials/samples/PLA/Ultimaker-PLA-Transparent@2x.png',
  },
];

storiesOf('ColorPicker', module).add('default', () => {
  return {
    components: { ColorPicker },
    template: '<ColorPicker :items="itemsFull" />',
    data: () => ({ itemsFull }),
  };
});
