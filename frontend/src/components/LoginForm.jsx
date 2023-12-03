const LoginForm = ({ formData, onChange, onSubmit, isLoading }) => {
    const { email, password } = formData;

    return (
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Enter your email'
                    onChange={onChange}
                />
            </div>
            <div className='form-group'>
                <input
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Enter password'
                    onChange={onChange}
                />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-block' disabled={isLoading}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
