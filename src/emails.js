import WelcomeUserEmail from './emails/welcomeUser'
import ResetPasswordEmail from './emails/resetPassword'
import OrderCancellationEmail from './emails/orderCancellation'

export default [
    {
        component: ResetPasswordEmail,
        fileName: 'resetPassword.html',
        options: {
            title: 'Password Reset Request',
            headCSS: 'body { background-color: #f7f6f5; }',
            previewText: 'Password Reset Request'
        }
    },
    {
        component: WelcomeUserEmail,
        fileName: 'welcomeUser.html',
        options: {
            title: 'Welcome to Lumi!',
            headCSS: 'body { background-color: #f7f6f5; }',
            previewText: 'Welcome to Lumi!'
        }
    },
    {
        component: OrderCancellationEmail,
        fileName: 'orderCancellation.html',
        options: {
            title: 'Your order has been cancelled.',
            headCSS: 'body { background-color: #f7f6f5; }',
            previewText: 'Your order has been cancelled.'
        }
    },
]
