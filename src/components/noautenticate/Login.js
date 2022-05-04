const Login = ({loginWithGoogle}) => {
    return ( <div>
                <button onClick={()=>{
                loginWithGoogle()
                }}>
                    Login with google
                </button>
            </div> );
}
 
export default Login;