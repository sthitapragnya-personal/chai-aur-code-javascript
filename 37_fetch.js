//fetch() in js
//------------------
//note : in the previos file that is 36_promise.js if we uncomment all the codes and then run then at a time then we will see that the fetch() code is present at the last and the first codes having setTimeeout are hardly for 1 sec or 2 sec but then also the fetch() codes are executed fast and then the other codes are executed why this happens ??? -> this happens because the fetch()api takes the events/tasks to another queue and that queue is a special high priority queue so the tasks present in them are executed fast  
// refer to 37_a.png and 37_b.png for better understanding of fetch()
