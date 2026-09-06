import './App.css';

function App() {
  return (
    <div className="Side-bar">
      <CourseAdd />
      <CourseList />
      <TotalCredit />
    </div>
  );
}

function CourseAdd() {
  return(
    <div className="Course-add-container">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <input className="Course-sumbit" type="submit" value="ADD COURSE" />
      </div>

      <div className="Course-add-form">
        <label className="Course-add">
          Course ID: 
          <input className="User-input" type="text" name="id" placeholder="CSE 311" />
        </label>
        <label className="Course-add">
          Name: 
          <input className="User-input" type="text" name="name" placeholder="Foundations of Computing I" />
        </label>
        <label className="Course-add">
          Credits: 
          <input className="User-input" type="text" name="credit" placeholder="4" />
        </label>

        <div className="Course-add-form">
          <label className="Course-add">
            Pre-Req:
            <input className="User-input" type="text" name="prereq" placeholder="CSE 123" />
          </label>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <input type="submit" value="ADD PRE-REQ COURSE" />
          </div>
        </div>
        
        {/*Code for pre-reqs already added here, or location of shown*/}

      </div>
    </div>
  );
}

function CourseList() {
  const rows = [];
  totalCredits = 0;

  courses.forEach((course) => {
    rows.push(
      <CourseListRow 
        id={course.id}
        name={course.name}
        credit={course.credit}
      />
    )
    totalCredits += course.credit;
  });

  return (
    <table className="Course-list-table">
      <thead>
        <tr>
          {/* <th>Name</th> */}
          {/* <th>Price</th> */}
          <th colSpan="4">
            Course Details
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CourseListRow({id, name, credit}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td> </td>
      <td>{credit}</td>
    </tr>
  )
}

function TotalCredit() {
  return (
    <h3>Total Credit: {totalCredits}</h3>
  );
}

let totalCredits = 0;
const courses = [
  {id: "CSE 311", name: "Foundations of Computing I", credit: 4, prereq: "CSE 123"}, 
  {id: "CSE 312", name: "Foundations of Computing II", credit: 4, prereq: "CSE 311"}
]

export default App;

// export default SideBarToggle;