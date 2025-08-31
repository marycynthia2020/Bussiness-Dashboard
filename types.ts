export type ButtonVariant = 'default' | 'secondary'

export interface ButtonProps {
    text: string,
    variant: ButtonVariant,
    handleClick?: ()=>void, 
    disabled?: boolean
}

export interface SignupFormValues {
  name: string,
  email: string,
  password: string,
  team_name: string
}

export interface LoginFormValues {
  email: string,
  password: string,
}