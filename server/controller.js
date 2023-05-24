require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})

//   const exercises = [

//     {
//         id: 1,
//         muscleGroup: 'traps',
//         name: 'shoulder shrug',
//         setsReps: '3 sets x 10 reps',
//         videoLink: 'pew'
//     },

//     {   id: 2,
//         muscleGroup: 'traps',
//         name: 'facepulls',
//         setsReps: '3 sets x 15 reps',
//         videoLink: 'pew'
//     },

//     {   id: 3,
//         muscleGroup: 'lats',
//         name: 'lat pulldown',
//         setsReps: '3 sets x 12 reps',
//         videoLink: 'pew'
//     },

//     {   id: 4,
//         muscleGroup: 'lats',
//         name: 'dumbbell rows',
//         setsReps: '4 sets x 10 reps',
//         videoLink: 'pew'
//     },

//   ]

const exercisesArray = [
  {
    id: 1,
    muscleGroup: 'biceps',
    name: 'Bicep Curl',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=o2M4cHjk-cA'
  },

  {
    id: 2,
    muscleGroup: 'biceps',
    name: 'Hammer Curl',
    setsReps: '3 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=OQEEpMdMEP8'
  },

  {
    id: 2,
    muscleGroup: 'biceps',
    name: 'Preacher Curl',
    setsReps: '3 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=vngli9UR6Hw'
  },

  {
    id: 3,
    muscleGroup: 'deltoids',
    name: 'Shoulder Press',
    setsReps: '4 sets x 8 reps',
    videoLink: 'https://www.youtube.com/watch?v=stT5ygQcHok'
  },

  {
    id: 3,
    muscleGroup: 'deltoids',
    name: 'Rear Delt Fly',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=3Hhmp2nhlt4'
  },

  {
    id: 4,
    muscleGroup: 'deltoids',
    name: 'Lateral Raises',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=6m7JO28RqZg'
  },

  {
    id: 3,
    muscleGroup: 'deltoids',
    name: 'Front Raises',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=-t7fuZ0KhDA'
  },

  {
    id: 5,
    muscleGroup: 'forearms',
    name: 'Dumbbell Reverse Curl',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=uiH-2J85mzI'
  },

  {
    id: 6,
    muscleGroup: 'forearms',
    name: 'Zottman Curl',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=ZrpRBgswtHs'
  },

  {
    id: 6,
    muscleGroup: 'forearms',
    name: 'Dumbbell Wrist Extension',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=la-0c4ubkvs'
  },

  {
    id: 7,
    muscleGroup: 'triceps',
    name: 'Dips',
    setsReps: '3 sets till failure',
    videoLink: 'https://www.youtube.com/watch?v=VHNVgoh377k'
  },

  {
    id: 8,
    muscleGroup: 'triceps',
    name: 'Cable Pushdown',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=JthKLSzmuP8'
  },

  {
    id: 8,
    muscleGroup: 'triceps',
    name: 'Push-up',
    setsReps: '3 sets x 25 reps',
    videoLink: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
  },

  {
    id: 8,
    muscleGroup: 'triceps',
    name: 'Overhead Extension',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=bEDusgF5SGQ'
  },

  {
    id: 9,
    muscleGroup: 'traps',
    name: 'Dumbbell Shrug',
    setsReps: '3 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=4MQRP05wAtg'
  },

  {
    id: 10,
    muscleGroup: 'traps',
    name: 'Facepulls',
    setsReps: '3 sets x 15 reps',
    videoLink: 'https://www.youtube.com/watch?v=V8dZ3pyiCBo'
  },

  {
    id: 10,
    muscleGroup: 'traps',
    name: 'Upright Rows',
    setsReps: '3 sets x 15 reps',
    videoLink: 'https://www.youtube.com/watch?v=WNz7O59GORA'
  },

  {
    id: 10,
    muscleGroup: 'traps',
    name: 'Rack Pulls',
    setsReps: '4 sets x 8 reps',
    videoLink: 'https://www.youtube.com/watch?v=u7NE34Vw81w'
  },

  {
    id: 11,
    muscleGroup: 'lats',
    name: 'Lat Pulldown',
    setsReps: '3 sets x 12 reps',
    videoLink: 'https://www.youtube.com/watch?v=Y6NnENfL3wM'
  },

  {
    id: 11,
    muscleGroup: 'lats',
    name: 'Pull-up',
    setsReps: '4 sets till failure',
    videoLink: 'https://www.youtube.com/watch?v=naYOyiiQIKQ'
  },

  {
    id: 12,
    muscleGroup: 'lats',
    name: 'Dumbbell Row',
    setsReps: '4 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=Bolw1TqZD-U'
  },

  {
    id: 11,
    muscleGroup: 'lats',
    name: 'Deadlift',
    setsReps: '4 sets x 5-8 reps',
    videoLink: 'https://www.youtube.com/shorts/g2ohE7_XkCY'
  },

  {
    id: 13,
    muscleGroup: 'abs',
    name: 'Leg Raises',
    setsReps: '3 sets x 20 reps',
    videoLink: 'https://www.youtube.com/watch?v=JB2oyawG9KI'
  },

  {
    id: 14,
    muscleGroup: 'abs',
    name: 'Crunches',
    setsReps: '3 sets x 20 reps',
    videoLink: 'https://www.youtube.com/watch?v=MKmrqcoCZ-M'
  },

  {
    id: 15,
    muscleGroup: 'obliques',
    name: 'Russian Twists',
    setsReps: '3 sets x 25 reps',
    videoLink: 'https://www.youtube.com/watch?v=wkD8rjkodUI'
  },

  {
    id: 16,
    muscleGroup: 'pectorals',
    name: 'Chest Press',
    setsReps: '4 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=qS9fVRrmyVY'
  },

  {
    id: 17,
    muscleGroup: 'pectorals',
    name: 'Incline Press',
    setsReps: '4 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=VFbjmiAAwJE'
  },

  {
    id: 18,
    muscleGroup: 'pectorals',
    name: 'Chest Fly',
    setsReps: '3 sets x 15 reps',
    videoLink: 'https://www.youtube.com/watch?v=rNBSb6OZJfI'
  },

  {
    id: 7,
    muscleGroup: 'pectorals',
    name: 'Dips',
    setsReps: '3 sets till failure',
    videoLink: 'https://www.youtube.com/watch?v=VHNVgoh377k'
  },

  {
    id: 19,
    muscleGroup: 'adductors',
    name: 'Adductor Machine',
    setsReps: '3 sets x 15 reps',
    videoLink: 'https://www.youtube.com/watch?v=CjAVezAggkI'
  },

  {
    id: 20,
    muscleGroup: 'calves',
    name: 'Calf Raises',
    setsReps: '4 sets x 15 reps',
    videoLink: 'https://www.youtube.com/watch?v=1lKjFPrYqf0'
  },

  {
    id: 20,
    muscleGroup: 'calves',
    name: 'Seated Calf Raises',
    setsReps: '4 sets x 15 reps',
    videoLink: 'https://www.youtube.com/watch?v=JbyjNymZOt0'
  },

  {
    id: 20,
    muscleGroup: 'calves',
    name: 'Single-Leg Hop',
    setsReps: '3 sets x 25 reps',
    videoLink: 'https://www.youtube.com/shorts/UAQ8_YS3Gnk'
  },

  {
    id: 21,
    muscleGroup: 'hamstrings',
    name: 'Stiff Leg Deadlift',
    setsReps: '3 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=jKhhHczuxF0'
  },

  {
    id: 22,
    muscleGroup: 'hamstrings',
    name: 'Leg Curl Machine',
    setsReps: '3 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=WxNISF4Nnp8'
  },

  {
    id: 11,
    muscleGroup: 'hamstrings',
    name: 'Deadlift',
    setsReps: '4 sets x 5-8 reps',
    videoLink: 'https://www.youtube.com/shorts/g2ohE7_XkCY'
  },

  {
    id: 11,
    muscleGroup: 'hamstrings',
    name: 'Sprints',
    setsReps: '4 sets x 10-15 seconds',
    videoLink: 'https://www.youtube.com/watch?v=nCklvVpGsmY'
  },

  {
    id: 23,
    muscleGroup: 'glutes',
    name: 'Squat',
    setsReps: '4 sets x 8 reps',
    videoLink: 'https://www.youtube.com/watch?v=gcNh17Ckjgg'
  },

  {
    id: 24,
    muscleGroup: 'glutes',
    name: 'Hip Thrust',
    setsReps: '3 sets x 8 reps',
    videoLink: 'https://www.youtube.com/watch?v=jQkKeL4Cg8M'
  },

  {
    id: 25,
    muscleGroup: 'quads',
    name: 'Squat',
    setsReps: '4 sets x 8 reps',
    videoLink: 'https://www.youtube.com/watch?v=gcNh17Ckjgg'
  },

  {
    id: 26,
    muscleGroup: 'quads',
    name: 'Split Squats',
    setsReps: '3 sets x 10 reps',
    videoLink: 'https://www.youtube.com/watch?v=SGHnCftrZkA'
  },

  {
    id: 27,
    muscleGroup: 'quads',
    name: 'Leg Extension',
    setsReps: '3 sets x 15 reps',
    videoLink: 'https://www.youtube.com/watch?v=ljO4jkwv8wQ'
  },

  {
    id: 26,
    muscleGroup: 'quads',
    name: 'Lunges',
    setsReps: '4 sets x 15 reps',
    videoLink: 'https://www.youtube.com/watch?v=687kU4JuWio'
  }
]
module.exports = {
  // -=------------------------------------------ THIS USING THE DB ------------------------------------------------------

  // getExerciseCard: (req,res) => {
  //     sequelize.query(`
  //     select * from exercises where muscle_group like '%traps'
  //     `).then(dbRes => {
  //         res.status(200).send(dbRes[0])
  //     }).catch(err => console.log('error seeding DB', err))
  // },

  // ---------------------------------------------THIS USING ARRAY OF OBJECTS --------------------------------------------

  // exercises,

  //works w first code in script js

  //     getExerciseCard: (req,res) => {

  //         res.status(200).send(exercisesArray.filter( (item) => {
  //             return item.muscleGroup === 'traps';
  //   }))},

  //attempt to make everything in one function

  getExerciseCard: (req, res) => {
    const { cardID } = req.params

    if (cardID === 'traps' || cardID === 'trapezius') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'traps'
        })
      )
    } else if (cardID === 'lats1' || cardID === 'lats2' || cardID === 'lats') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'lats'
        })
      )
    } else if (cardID === 'biceps1' || cardID === 'biceps2' || cardID === 'biceps') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'biceps'
        })
      )
    } else if (cardID === 'triceps1' || cardID === 'triceps2' || cardID === 'triceps') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'triceps'
        })
      )
    } else if (cardID === 'forearms1' || cardID === 'forearms2' || cardID === 'forearms') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'forearms'
        })
      )
    } else if (cardID === 'glutes1' || cardID === 'glutes2' || cardID === 'glutes') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'glutes'
        })
      )
    } else if (cardID === 'hammys1' || cardID === 'hammys2' || cardID === 'hamstrings') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'hamstrings'
        })
      )
    } else if (cardID === 'calves1' || cardID === 'calves2' || cardID === 'calves') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'calves'
        })
      )
    } else if (cardID === 'delts1' || cardID === 'delts2' || cardID === 'deltoids') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'deltoids'
        })
      )
    } else if (cardID === 'chest1' || cardID === 'chest2' || cardID === 'pectorals') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'pectorals'
        })
      )
    } else if (cardID === 'ob1' || cardID === 'ob2' || cardID === 'obliques') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'obliques'
        })
      )
    } else if (cardID === 'abss' || cardID === 'abs') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'abs'
        })
      )
    } else if (cardID === 'quads1' || cardID === 'quads2' || cardID === 'quads') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'quads'
        })
      )
    } else if (cardID === 'adds1' || cardID === 'adds2' || cardID === 'adductors') {
      res.status(200).send(
        exercisesArray.filter((item) => {
          return item.muscleGroup === 'adductors'
        })
      )
    } else {
      res.status(400).send('Invalid ID')
    }
  },

  //schedule

  getWeek: (req, res) => {
    sequelize
      .query(
        `
        select * from schedule
        `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
      })
      .catch((err) => console.log('error seeding DB', err))
  },

  // getMonday: (req, res) => {
  //   sequelize
  //     .query(
  //       `
  //       select * from schedule where day = 'monday';
  //       `
  //     )
  //     .then((dbRes) => {
  //       res.status(200).send(dbRes[0]);
  //     })
  //     .catch((err) => console.log("error seeding DB", err));
  // },

  postWeek: (req, res) => {
    const { day, exercises, setsreps } = req.body

    sequelize
      .query(
        `
        insert into schedule (day,exercises,setsreps)
        values ('${day}','${exercises}','${setsreps}')
        `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
      })
  },

  // progress

  getProgress: (req, res) => {
    sequelize
      .query(
        `
        select * from progress
        `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
      })
      .catch((err) => console.log('error seeding DB', err))
  },

  postProgress: (req, res) => {
    const { date, weight, progress } = req.body

    sequelize
      .query(
        `
        insert into progress (date,weight,progressnote)
        values ('${date}','${weight}','${progress}')
        `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
      })
      .catch((err) => console.log('error seeding DB', err))
  },

  seed: (req, res) => {
    sequelize
      .query(
        `
            drop table if exists exercises;
            drop table if exists schedule;
            drop table if exists progress;

            create table exercises (
                exercise_id serial primary key,
                muscle_group varchar,
                name varchar,
                sets_reps varchar,
                videolink varchar

            );

            insert into exercises (muscle_group,name,sets_reps,videolink)
            values ('traps','shoulder shrug','3 sets x 10 reps', null),
            ('traps','facepulls','3 sets x 15 reps', null),
            ('lats','lat pulldown','3 sets x 12 reps', null),
            ('lats','dumbbell rows','4 sets x 10 reps', null);


            create table schedule (
                day_id serial primary key,
                day varchar,
                exercises varchar,
                setsreps varchar
            );

    

            create table progress (
                progress_id serial primary key,
                date varchar,
                weight integer,
                progressnote varchar(100)
            )
        
        
        `
      )
      .then(() => {
        console.log('db seeded')
        res.sendStatus(200)
      })
      .catch((err) => console.log('error seeding db', err))
  }
}
