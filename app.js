let todo = [];
let req = prompt('please enter your request: ');

while(true){

    if(req == 'quit'){
        console.log('quitting app....');
        break;
    }

    else if(req == 'list'){
        console.log('----------------------------------');
        for(i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log('--------------------------------' );
        ques = prompt('Wanna continue "y" or "n"?');
        if (ques == 'y'){

        }
        else if (ques == 'n'){
            console.log('Goodbye!');
            break;
        }

    }

    else if(req == 'add'){
        let task = prompt('Please enter the task you wish to add: ');
        todo.push(task);
        console.log('Task added');
    }

    else if(req == 'delete'){
        let idx = prompt('Which you wanna delete(index no): ');
        todo.splice(idx, 1);
        console.log('Task deleted');
    }


    req = prompt('please enter your request: ');
}