 
 function Ankit(props) {
     console.log(props);                      //object,  props is object 
    return(
        <>
 <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media.istockphoto.com/id/182474476/photo/lion.jpg?s=612x612&w=0&k=20&c=Od3in40lsBUlL1OqKQEmAK9wPaiy7ZzcDafr8qRrH30=" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {props.username}, {props.Arr}, {props.myobj.age}, {props.fun()}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
</>
    )
 }
    
// or

//   function Ankit({username="newUser", Arr, myobj, fun }) {                         //when we not passed username then default value is 'newuser'
//     return(
//         <>
//  <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
//   <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media.istockphoto.com/id/182474476/photo/lion.jpg?s=612x612&w=0&k=20&c=Od3in40lsBUlL1OqKQEmAK9wPaiy7ZzcDafr8qRrH30=" alt="" width="384" height="512"/>
//   <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
//     <blockquote>
//       <p className="text-lg font-medium">
//         “Tailwind CSS is the only framework that I've seen scale
//         on large teams. It’s easy to customize, adapts to any design,
//         and the build size is tiny.”
//       </p>
//     </blockquote>
//     <figcaption className="font-medium">
//       <div class="text-sky-500 dark:text-sky-400">
//         {username}, {Arr}, {myobj.age}, {fun()}
//       </div>
//       <div className="text-slate-700 dark:text-slate-500">
//         Staff Engineer, Algolia
//       </div>
//     </figcaption>
//   </div>
// </figure>
// </>
//     )
//  }

 export default Ankit