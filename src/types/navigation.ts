export interface NavigationLink {
  label: string
  path: string
}

export interface NavigationGroup {
  title: string
  links: NavigationLink[]
}

export interface MainNavigation {
  home: NavigationLink
  sections: NavigationLink[]
  callToAction: NavigationLink
}
