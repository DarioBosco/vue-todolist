/* 
BONUS:
modificare la struttura dell'array dei todos. Da array di stringhe diventa array di oggetti
Con la proprietà done colorare in verde gli <li> di todos  che sono stati svolti, in rosso gli <li> con todos non ancora svolti.
Al click su un <li> potremo infine modificare la proprietà done, portandola a false se era precedentemente a true e viceversa.

*/

Vue.config.devtools = true;

const app = new Vue({
	el: '#app',
	data: {
		newToDo: '',
		toDos: [
			{
				title: 'Fare i compiti',
				done: true,
			},
			{
				title: 'Fare la spesa',
				done: false,
			},
		],
	},
	methods: {
		addToDo() {
			if (this.newToDo != '') {
				this.toDos.push(this.newToDo);
				this.newToDo = '';
			}
		},
		removeToDo(index) {
			this.toDos.splice(index, 1);
		},
		changeDoneStatus(index) {
			this.toDos[index].done = !this.toDos[index].done;
		},
	},
});
