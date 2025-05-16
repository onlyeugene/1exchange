import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container py-4">
      {children}
    </div>
  )
}

export default Container;
