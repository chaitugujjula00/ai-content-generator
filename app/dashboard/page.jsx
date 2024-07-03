"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState("")
  return (
    <div>
      <SearchSection onSearchInput={(value)=>setUserSearchInput(value)} />

      <TemplateList userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard