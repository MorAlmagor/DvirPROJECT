import React from 'react';
import { FlatList } from 'react-native';
import FormSection from './FormSection';

const formSectionsList = [
  {
    title: 'Brake System',
    checkList: [
      {
        keyId: 'brakesParking',
        text: 'Brake Parking.'
      },
      {
        keyId: 'brakesService',
        text: 'Brakes Service.'
      },
      {
        keyId: 'brakeAccessories',
        text: 'Brake Accesories.'
      },
      {
        keyId: 'airCompresor',
        text: 'Air Compressor'
      },
      {
        keyId: 'airLines',
        text: 'Air Lines'
      },
    ]
  },
  {
    title: 'Lights',
    checkList: [
      {
        keyId: 'lightHead',
        text: 'Light Head'
      },
      {
        keyId: 'lightTail',
        text: 'Light Tail'
      },
      {
        keyId: 'lightStop',
        text: 'Light Stop'
      },
      {
        keyId: 'lightDash',
        text: 'Light Dash'
      },
      {
        keyId: 'lightTurnIndicators',
        text: 'Light Turn Indicators'
      },
      {
        keyId: 'spareSealBeam',
        text: 'Spare Seal Beam'
      },
      {
        keyId: 'spareBulbs',
        text: 'Spare Bulbs'
      },
    ]
  },
  {
    title: 'Engine',
    checkList: [
      {
        keyId: 'engine',
        text: 'Engine'
      },
      {
        keyId: 'battery',
        text: 'Battery'
      },
      {
        keyId: 'fluidLevel',
        text: 'Fluid Level'
      },
      {
        keyId: 'beltsAndHoses',
        text: 'Belts And Hoses'
      },
      {
        keyId: 'oilLevel',
        text: 'Oil Level'
      },
      {
        keyId: 'radiatorLevel',
        text: 'Radiator Level'
      },
      {
        keyId: 'exhaust',
        text: 'Exhaust'
      },
      {
        keyId: 'muffler',
        text: 'Muffler'
      },
      {
        keyId: 'starter',
        text: 'Starter'
      },
      {
        keyId: 'generator',
        text: 'Generator'
      },
      {
        keyId: 'clutch',
        text: 'Clutch'
      },
      {
        keyId: 'transmission',
        text: 'Transmission'
      },
    ]
  },
  {
    title: 'Body',
    checkList: [
      {
        keyId: 'fuleTanks',
        text: 'Fule Tanks'
      },
      {
        keyId: 'mirrors',
        text: 'Mirrors'
      },
      {
        keyId: 'horn',
        text: 'Horn'
      },
      {
        keyId: 'body',
        text: 'Body'
      },
      {
        keyId: 'frameAndAssembly',
        text: 'Frame And Assembly'
      },
      {
        keyId: 'windshieldsWipers',
        text: 'Wind shields Wipers'
      },
      {
        keyId: 'rearEnd',
        text: 'Rear End'
      },
      {
        keyId: 'fifthWheel',
        text: 'Fifth Wheel'
      },
      {
        keyId: 'windows',
        text: 'Windows'
      }
    ]
  },
  {
    title: 'Steering',
    checkList: [
      {
        keyId: 'steering',
        text: 'Steering'
      },
      {
        keyId: 'frontAxle',
        text: 'Front Axle'
      },
      {
        keyId: 'suspensionSystem',
        text: 'Suspension System'
      },
    ]
  }, {
    title: 'Safety',
    checkList: [
      {
        keyId: 'reflectors',
        text: 'Reflectors'
      },
      {
        keyId: 'reflectiveTriangles',
        text: 'Reflective Triangles'
      },
      {
        keyId: 'fireExtinguisher',
        text: 'Fire Extinguisher'
      },
      {
        keyId: 'flags',
        text: 'Flags'
      },
      {
        keyId: 'flares',
        text: 'Flares'
      }
      
    ]
  },
  {
    title: 'Wheels And Tires',
    checkList: [
      {
        keyId: 'tireChains',
        text: 'Tire Chains'
      },
      {
        keyId: 'tires',
        text: 'Tires'
      },
      {
        keyId: 'weelsAndRim',
        text: 'Rims'
      }
    ]
  },
  {
    title: 'Other',
    checkList: [
      {
        keyId: 'couplingDevices',
        text: 'Coupling Devices'
      },
      {
        keyId: 'driverLine',
        text: ' Driver Line'
      },
      {
        keyId: 'tripRecorder',
        text: 'Trip Recorder'
      },
      {
        keyId: 'spareFuses',
        text: 'Spare Fuses'
      },
      {
        keyId: 'fusees',
        text: 'Fuses'
      }
    ]
  },
];

const Form = () => {
  return (
    <FlatList
      data={formSectionsList}
      keyExtractor={(section) => section.title}
      renderItem={({ item }) => {
        return <FormSection sectionInfo={item} />;
      }}
    />
  );
};


export default Form;