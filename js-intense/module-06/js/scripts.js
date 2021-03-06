'Use strict'

// const animal = {eats: true};

// const dog = Object.create(animal);
// dog.barks = true;

// for(key in dog) {
//     console.log(key)
// }

// // Constructor
// const Notepad = function Notepad(notes = []) {
//     this.notes = notes
// }

// // Adding functions to prototype
// Notepad.prototype.getNotes = function() {
//     return this.notes
// }
// Notepad.prototype.saveNotes = function(note) {
//         this.notes.push(note);
//         return note;
// }
// Notepad.prototype.deleteNote = function(id) {
//     for(let i = 0; i < this.notes.length; i += 1) {
//         if(this.notes[i].id === id) {           
//             return this.notes.splice(i, 1)
//         };
//     }
// }
// Notepad.prototype.findNoteById = function(id) {
//     for(let note of this.notes) {
//         if(note.id === id) {                    
//             return note;
//         };
//     };
// }
// Notepad.prototype.updateNoteContent = function(id, updatedContent) {
//     const findNote = this.findNoteById(id);
//     const updatedNoteContent = Object.keys(updatedContent);
//     for(let key of updatedNoteContent) {
//         findNote[key] = updatedContent[key];
//     }
//     return findNote                             
// },
// Notepad.prototype.updateNotePriority = function(id, priority){
//     const findNote = this.findNoteById(id);     
//     findNote.priority = priority;
//     return findNote
// },
// Notepad.prototype.filterNotesByQuery = function(query) { 
//     const arr = [];
//     for(let note of this.notes) {               
        
//         if(note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())) {      
//             arr.push(note);
//         }
//     };
//     return arr
// },
// Notepad.prototype.filterNotesByPriority = function(priority) {
//     const filteredNotes = [];
//     for(let note of this.notes) {
//         if(note.priority === priority) {        
//             filteredNotes.push(note);
//         };
//     };
//     return filteredNotes;
// }
// Notepad.prototype.getPriorityName = function getPriorityName(priorityId) {
//     const priorityArray = Object.values(Notepad.PRIORITIES);
//     for(let priority of priorityArray) {
//         if(priority.id === priorityId) {
//             return(priority.name);
//         }
//     }    
// };

// const initialNotes = [
//     {
//       id: 1,
//       title: 'JavaScript essentials',
//       body:
//         'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//       priority: PRIORITY_TYPES.HIGH,
//     },
//     {
//       id: 2,
//       title: 'Refresh HTML and CSS',
//       body:
//         'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//       priority: PRIORITY_TYPES.NORMAL,
//     },
//   ];

// const notepad = new Notepad(initialNotes);


// // MAP
// Notepad.PRIORITIES = {
//     0: { id: 0, value: 0, name: 'Low' },
//     1: { id: 1, value: 1, name: 'Normal' },
//     2: { id: 2, value: 2, name: 'High' },
// };






// const Hero = function(name, xp) {
//     this.name = name,
//     this.xp = xp
// }

// Hero.prototype.gainXp = function(amount) {
//     console.log(`${this.name} gained ${amount}`);
//     this.xp += amount;
//     return `${this.name} XP is ${this.xp}`
// }


// const Warrior = function(name, xp, weapon) {
//     Hero.call(this, name, xp);
//     this.weapon = weapon
// }

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
// Warrior.prototype.attack = function(){
//     return `${this.name} attacked monster for ${(Math.floor(Math.random() * (5 - 1)) + 1)} damage`
// }

// const mango = new Warrior('Mango', 500, 'axe')

const PRIORITY_TYPES = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
};

class Notepad {
    constructor(notes) {
        this._notes = notes
    };

    static getPriorityName(priorityId) {
        const priorityArray = Object.values(Notepad.PRIORITIES);
        for(let priority of priorityArray) {
            if(priority.id === priorityId) {
                return(priority.name);
            };
        };
    };

    get notes() {
        return this._notes
    };

    saveNote(note) {
        this.notes.push(note);
        return note;
    };

    deleteNote(id) {
        for(let i = 0; i < this.notes.length; i += 1) {
            if(this.notes[i].id === id) {           
                return this.notes.splice(i, 1)
            };
        };
    };

    findNoteById(id) {
        for(let note of this.notes) {
            if(note.id === id) {                    
                return note;
            };
        };
    };

    updateNoteContent(id, updatedContent) {
        const findNote = this.findNoteById(id);
        const updatedNoteContent = Object.keys(updatedContent);
        for(let key of updatedNoteContent) {
            findNote[key] = updatedContent[key];
        };
        return findNote                             
    };

    updateNotePriority(id, priority) {
        const findNote = this.findNoteById(id);     
        findNote.priority = priority;
        return findNote
    };

    filterNotesByQuery(query) { 
        const arr = [];
        for(let note of this.notes) {                  
            if(note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())) {      
                arr.push(note);
            };
        };
        return arr
    };

    filterNotesByPriority(priority) {
        const filteredNotes = [];
        for(let note of this.notes) {
            if(note.priority === priority) {        
                filteredNotes.push(note);
            };
        };
        return filteredNotes;
    };
};

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};

const initialNotes = [
    {
      id: 'id-1',
      title: 'JavaScript essentials',
      body:
        'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
      priority: PRIORITY_TYPES.HIGH,
    },
    {
      id: 'id-2',
      title: 'Refresh HTML and CSS',
      body:
        'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
      priority: PRIORITY_TYPES.NORMAL,
    },
  ];
  
  /*
   * Посмотрим имя приоритета по id
   */
  console.log(Notepad.getPriorityName(PRIORITY_TYPES.LOW)); // "Low"
  console.log(Notepad.getPriorityName(PRIORITY_TYPES.NORMAL)); // "Normal"
  console.log(Notepad.getPriorityName(PRIORITY_TYPES.HIGH)); // "High"
  
  const notepad = new Notepad(initialNotes);
  
  /*
    Смотрю что у меня в заметках после инициализации
  */
  console.log('Все текущие заметки: ', notepad.notes);
  
  /*
   * Добавляю еще 2 заметки и смотрю что получилось
   */
  notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  });
  
  console.log('Все текущие заметки: ', notepad.notes);
  
  /*
   * Зима уже близко, пора поднять приоритет на покупку одежды
   */
  notepad.updateNotePriority('id-4', PRIORITY_TYPES.NORMAL);
  
  console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);
  
  /*
   * Решил что фреймворки отложу немного, понижаю приоритет
   */
  notepad.updateNotePriority('id-3', PRIORITY_TYPES.LOW);
  
  console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);
  
  /*
   * Решил отфильтровать заметки по слову html
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
  );
  
  /*
   * Решил отфильтровать заметки по слову javascript
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
  );
  
  /*
   * Хочу посмотреть только заметки с нормальным приоритетом
   */
  console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(PRIORITY_TYPES.NORMAL),
  );
  
  /*
   * Обновим контент заметки с id-3
   */
  notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
  });
  
  console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.notes,
  );
  
  /*
   * Повторил HTML и CSS, удаляю запись c id-2
   */
  notepad.deleteNote('id-2');
  console.log('Заметки после удаления с id -2: ', notepad.notes);






























