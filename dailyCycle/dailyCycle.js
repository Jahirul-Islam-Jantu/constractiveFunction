/** 
 * "Jahir", Awake from Sleep
 * "Jahir", Go to washroom
 * "Jahir", Take Breakfast
 * "Jahir", Study in home
 * "Jahir", Take Lunch
 * "Jahir", Take a power nap
 * "Jahir", Study in home
 * "Jahir", Take Dinner
 * "Jahir", Study again
 * "Jahir", Go to sleep 
*/     

/** 
 * "Sahana", Awake from Sleep
 * "Sahana", Go to washroom
 * "Sahana", Take Breakfast
 * "Sahana", Go To Office
 * "Sahana", Take Lunch
 * "Sahana", Return from Office
 * "Sahana", Time spend with family
 * "Sahana", Take Dinner
 * "Sahana", Go to sleep 
*/  

/** 
 * "Jantu", Awake from Sleep
 * "Jantu", Go to washroom
 * "Jantu", Take Breakfast
 * "Jantu", Go to School
 * "Jantu", Take tiffin
 * "Jantu", Back to home
 * "Jantu", Take rest
 * "Jantu", Study in home
 * "Jantu", Take dinner
 * "Jantu", Go to Sleep 
*/  

/** 
 * "Keya", Awake from Sleep
 * "Keya", Go to washroom
 * "Keya", Take Breakfast
 * "Keya", Do her home Office
 * "Keya", Take Lunch
 * "Keya", Take a power nap
 * "Keya", Make food for Children
 * "Keya", Take Dinner
 * "Keya", Study again
 * "Keya", Go to sleep 
*/  

/** 
 * "Tawhid", Awake from Sleep
 * "Tawhid", Go to washroom
 * "Tawhid", Take Breakfast
 * "Tawhid", Go to University
 * "Tawhid", Take Lunch
 * "Tawhid", Back to home
 * "Tawhid", Study in home
 * "Tawhid", Take Dinner
 * "Tawhid", Study again
 * "Tawhid", Go to sleep 
*/  

/** 
 * function: Human_LifeCycle
 * Param: human_name
 * ":human_name", Awake from Sleep
 * ":human_name", Go to washroom
 * ":human_name", Take Breakfast
 * ":human_name", Go to University
 * ":human_name", Take Lunch
 * ":human_name", Back to home
 * ":human_name", Study in home
 * ":human_name", Take Dinner
 * ":human_name", Study again
 * ":human_name", Go to sleep 
*/ 


/**
 * Call Human_LifeCycle for "Jahir"
 * Call Human_LifeCycle for "Sahana"
 * Call Human_LifeCycle for "Jantu"
 * Call Human_LifeCycle for "Keya"
 * Call Human_LifeCycle for "Tawhid"
 */

// function: Sleep
// Param: name
// Definition: How to sleep

function sleep (name){
    console.log(`${name} is sleeping`);
}

// function: Work
// Param: name
// Definition: How to work

function work (name){
    console.log(`${name} is working`);
}

// function: Awake
// Param: name
// Definition: How to Awake

function awake (name) {
    console.log(`${name} is awake`);
}

// function: Study
// Param: name
// Definition: How to study

function study (name) {
    console.log(`${name} is studying`);
}

// Function : eat 
// Param: name
// Param: time
// Definition: how to eat

function eat (name, time) {
    console.log(`${name} is eating ${time}`);
}


// Function : walk 
// Param: name
// Param: destination
// Definition: how to walk

function walk (name, destination) {
    console.log(`${name} is walking to ${destination}`);
}

// Students_lifeCycle
// Param: Name
// Definition: 
// - Awake -> Name
// - Eat -> Name 'breakfast'
// - Study -> Name 
// - Eat -> Name 'Lunch'
// - Study -> Name 
// - Eat -> Name 'Dinner'
// - Sleep -> Name 

function studentsLifeCycle (name){
    awake(name)
    eat(name, 'breakfast')
    study(name)
    eat(name, 'lunch')
    study(name)
    eat(name, 'dinner')
    sleep(name)
}
console.log('--------Students Life Cycle--------');
studentsLifeCycle('Jantu');
console.log('--------Students Life Cycle--------');
studentsLifeCycle('Jahir');



// call students_lifecycle for 'Tawhid'
// call students_lifecycle for 'Jantu'
// call students_lifecycle for 'Jahir'

// Job_holder_lifeCycle
// Param: Name
// Definition: 
// - Awake -> Name
// - Eat -> Name 'breakfast'
// - Walk -> Name 'office'
// - Work -> Name 
// - Eat -> Name 'Lunch'
// - Walk -> Name 'home'
// - Eat -> Name 'Dinner'
// - Sleep -> Name 

// call job_holder_life_cycle for 'Sahana'
function jobHolderLifeCycle (name){
    awake(name)
    eat(name, 'breakfast')
    walk(name, 'office')
    work(name)
    eat(name, 'lunch')
    walk(name, 'home')
    eat(name, 'dinner')
    sleep(name)
}
console.log('--------job Holder Life Cycle--------');
jobHolderLifeCycle('Sahana')

// Remote_Worker_lifeCycle
// Param: Name
// Definition: 
// - Awake -> Name
// - Eat -> Name 'breakfast'
// - Work -> Name 
// - Eat -> Name 'Lunch'
// - Study -> Name
// - Eat -> Name 'Dinner'
// - Sleep -> Name 

// call Remote_job_holder_life_cycle for 'Sahana'

function remoteJobHolderLifeCycle (name){
    awake(name)
    eat(name, 'breakfast')
    work(name)
    eat(name, 'lunch')
    study(name)
    eat(name, 'dinner')
    sleep(name)
}
console.log('--------Remote Life Cycle--------');
remoteJobHolderLifeCycle('Keya');

// University_lifeCycle

function universityStudentLifeCycle (name){
    awake(name)
    eat(name, 'breakfast')
    walk(name, 'university')
    eat(name, 'lunch')
    walk(name, 'home')
    study(name)
    eat(name, 'dinner')
    study(name)
    sleep(name)
} 

console.log('--------University Students Life Cycle--------');
universityStudentLifeCycle('Tawhid');