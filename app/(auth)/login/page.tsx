import LoginUI from '@/module/auth/components/logn-ui'
import {requireUnAuth} from '@/module/auth/utils/auth-utils'

const LoginPage = async() => {
  await requireUnAuth();
  return (
    <div>
        <LoginUI />
    </div>
  )
}

export default LoginPage