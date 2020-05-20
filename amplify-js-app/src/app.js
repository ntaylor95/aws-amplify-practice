import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { onCreateTodo } from './graphql/subscriptions'

import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);

async function createNewTodo() {
  const todo = { name: "Subscribe Test" , description: "Realtime and Offline"}
  return await API.graphql(graphqlOperation(createTodo, { input: todo }))
}

async function getAll() {
    return await API.graphql(graphqlOperation(listTodos));
}

API.graphql(graphqlOperation(onCreateTodo)).subscribe({
    next: (evt) =>{
        SubscriptionResult.innerHTML = `SUBSCRIPTION RESULTS`
        const todo = evt.value.data.onCreateTodo;
        SubscriptionResult.innerHTML += `<p>${todo.name} - ${todo.description}</p>`
        }
});

const MutationButton = document.getElementById('MutationEventButton');
const MutationResult = document.getElementById('MutationResult');
const QueryResult = document.getElementById('QueryResult');
const SubscriptionResult = document.getElementById('SubscriptionResult');

const getAllTodos = () => getAll().then((evt) => {
    const items = evt.data.listTodos.items;
    QueryResult.innerHTML = `<h1>All Items</h1>`;
    QueryResult.innerHTML += `<ul>`;
    items.forEach(item => {
        QueryResult.innerHTML += `<li>${item.name}</li>`;
    });
    QueryResult.innerHTML += `</ul>`;
});

getAllTodos();

MutationButton.addEventListener('click', (evt) => {
  MutationResult.innerHTML = `MUTATION RESULTS:`;
  
  createNewTodo().then( (evt) => {
        MutationResult.innerHTML += `<p>${evt.data.createTodo.name} - ${evt.data.createTodo.description}</p>`  
        getAllTodos();
    });
});