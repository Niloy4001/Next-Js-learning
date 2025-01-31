

const layout = ({children}) => {
  return (
    <div>
        <div className="grid grid-cols-12">
        <div className="col-span-3">
            <ul className="space-y-4">
                <li>profile</li>
                <li>profile</li>
                <li>profile</li>

            </ul>
        </div>
        <div className="col-span-9">
            {children}
        </div>
        </div>
    </div>
  )
}

export default layout