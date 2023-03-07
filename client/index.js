import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import ToDoItem from '../src'

hydrateRoot(document.getElementById('root'), <ToDoItem />)