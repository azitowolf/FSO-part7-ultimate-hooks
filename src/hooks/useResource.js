// Extract the code for communicating with the backend into its own useResource hook. 
// It is sufficient to implement fetching all resources and creating a new resource.
import axios from 'axios'
import { useState } from 'react'

export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])
  
    const create = (resource) => {
        axios.post(baseUrl, resource)
        .then((response) => {
            setResources(resources.concat(response.data))
        })
        .catch((err) => {
            console.warn(err)
        })    
    }
    
    const fetchAll = () => {
        console.log('fetching from hook');
        
        axios.get(baseUrl)
        .then((result) => {
            setResources(result.data)
        })
        .catch((err) => {
            console.warn(err)
        })
    }

    const service = {
      create,
      fetchAll
    }
  
    return [
      resources, service
    ]
  }