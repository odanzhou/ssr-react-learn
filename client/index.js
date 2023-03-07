import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import APP from '../src'

hydrateRoot(document.getElementById('root'), <APP />)