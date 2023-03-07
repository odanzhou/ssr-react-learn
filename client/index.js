import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import APP from '../src'
// 脱水
const defaultToDoList = window.data
hydrateRoot(document.getElementById('root'), <APP defaultToDoList={defaultToDoList} />)