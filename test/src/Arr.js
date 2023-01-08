import React from 'react';
import { useDispatch } from 'react-redux'
import {addLife } from './redux/lifeSlice';
import {addSport } from './redux/tomorrowSlice';
const Arr = () => {
const dispatch = useDispatch()
const life = [
    {
      'id': 1,
      'A': [ //footbol
        {
          'A': [  //first play
            {
              'A': 'Франция', 'B': 'Аргентина', 'C': '1 - 2', 'P': 1, 'T': '34 мин.', 'P1': 3.2, 'X': 4.1, 'P2': 1.4, 'F1': 1.5, 'F2': 2, 'F3': 2.5, 'F4': 3, 'Fm1': 3, 'Fm2': 2.25, 'Fm3': 1.8, 'A1': 1.8, 'A2': 2.3, 'A3': 3, 'Am1': 2.8, 'Am2': 2, 'Am3': 1.5
            }
          ],
          'B': [//second play
            {
              'A': 'Батэ', 'B': 'Динамо', 'C': '1 - 0', 'P': 2, 'T': '65 мин.', 'P1': 1.8, 'X': 3.2, 'P2': 2.8, 'B1': 1.5, 'F2': 2, 'F3': 2.5, 'F4': 3, 'Fm1': 3, 'Fm2': 2.25, 'Fm3': 1.8, 'A1': 1.8, 'A2': 2.3, 'A3': 3, 'Am1': 2.8, 'Am2': 2, 'Am3': 1.5
            }
          ]
        }
      ],
      'B': [ //volebool
        {
          'A': [  //first play
            {
              'A': 'Турция', 'B': 'Германия', 'C': '13 - 22', 'P': 1, 'T': '26 мин.', 'P1': 3.2, 'P2': 1.4, 'S1t': 8.2, 'S1g': 1.15, 'S2t': 2.25, 'S2g': 1.8, 'S3t': 2, 'S3g': 1.75
            }
          ],
        }
      ],
      'C': [ //basket
        {
          'A': [  //first play
            {
              'A': 'Беларусь', 'B': 'Испания', 'C': '33 - 36', 'CH': 3, 'T': '45 мин.', 'P1': 2.25, 'P2': 1.6, 'CH4b': 2.8, 'CH4i': 1.75
            }
          ],
        }
      ],
      'D': [ //hock
        {
          'A': [  //first play
            {
              'A': 'Юность', 'B': 'СКА', 'C': '2 - 3', 'P': 1, 'T': '12 мин.', 'P1': 1.6, 'P2': 1.8, 'P2u': 1.8, 'P2s': 1.65, 'P3u': 2.1, 'P3s': 1.9
            }
          ],
        }
      ]
    }
  ]

  const tomorrow=[
    {
      'id':2,
      'A':[ //footbol
  {
  'A':[  //first play
  {'A':'Испания','B':'Чехия', 'P':1,'T':'34 мин.','P1':3.2,'X':4.1,'P2':1.4,'F1':1.5,'F2':2,'F3':2.5,'F4':3,'Fm1':3,'Fm2':2.25,'Fm3':1.8,'A1':1.8,'A2':2.3,'A3':3,'Am1':2.8,'Am2':2,'Am3':1.5
  }
  ],
  'B':[//second play
    {'A':'Батэ','B':'Минск','P':2,'T':'20:30','P1':1.8,'X':3.2,'P2':2.8,'B1':1.5,'F2':2,'F3':2.5,'F4':3,'Fm1':3,'Fm2':2.25,'Fm3':1.8,'A1':1.8,'A2':2.3,'A3':3,'Am1':2.8,'Am2':2,'Am3':1.5
  }
  ]
  }
    ],
    'B':[ //volebool
    {
      'A':[  //first play
    {'A':'Турция','B':'Испания','P':1,'T':'16:00','P1':3.2,'P2':1.4,'S1t':8.2,'S1g':1.15,'S2t':2.25,'S2g':1.8,'S3t':2,'S3g':1.75
    }
      ],
    }
    ],
    'C':[ //basket
    {
      'A':[  //first play
    {'A':'Россия','B':'Польша','CH':3,'T':'17:30','P1':2.25,'P2':1.6,'CH4b':2.8,'CH4i':1.75
    }
      ],
    }
    ],
    'D':[ //hock
    {
      'A':[  //first play
    {'A':'Украина','B':'Швеция','P':1,'T':'12:45','X': 3.1,'P1':1.6,'P2':1.8,'P2u':1.8,'P2s':1.65,'P3u':2.1,'P3s':1.9
    }
      ],
    }
    ]
    }
  ]

  dispatch(addSport( tomorrow ))
dispatch(addLife( life ))
return(<></>)
}
export default Arr;