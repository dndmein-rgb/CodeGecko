"use client"
import {useInfiniteQuery} from'@tanstack/react-query'
import {fetchRepositories} from '../actions/index'

export const useRepositories=()=>{
    return useInfiniteQuery({
        queryKey:["repositories"],
        queryFn:async({pageParam=1})=>{
            const data=fetchRepositories(pageParam,10)
            return data
        },
        initialPageParam:1,
        getNextPageParam:(lastPage,allPages)=>{
            if(lastPage.length<10){
                return undefined
            }
            return allPages.length+1
        }
    })
}