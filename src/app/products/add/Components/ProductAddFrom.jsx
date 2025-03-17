"use client";

export default  function ProductAddForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const payload = {name};
        const res = await fetch('http://localhost:3000/api/items', {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json",
            },
        });
        const result = await res.json();
        console.log(result);
        form.reset();
        
    }
  return (
    <div className="mx-auto"> 
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='User Name' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
