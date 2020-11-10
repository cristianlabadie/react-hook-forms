import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form'

const FormHooks = () => {
    const {register, errors, handleSubmit} = useForm()

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }

    return ( 
        <Fragment>
            <div className="container mt-5">
                <h1>Formulario</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        name="titulo"
                        className="form-control my-2"
                        ref={register({
                            required: { value: true, message: 'Titulo obligatorio' }
                        }) }
                    />
                    <button className="btn btn-primary">Enviar</button>
                </form>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
            </div>
        </Fragment>
     );
}
 
export default FormHooks;