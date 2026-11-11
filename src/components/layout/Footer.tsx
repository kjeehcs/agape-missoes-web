import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { footerNavigation } from '@/data/navigation'
import { organization } from '@/data/organization'
import { layoutText } from '@/data/ui-text'
import { formatAddressLines } from '@/lib/format'

const footerLinkClasses = 'text-primary-soft underline-offset-4 hover:text-surface hover:underline'
const footerTitleClasses = 'font-sans text-[15px] font-semibold text-surface'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-primary-soft">
      <Container className="flex flex-col gap-10 pb-8 pt-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3.5">
            <Logo tone="inverse" showDescriptor={false} />
            <p className="text-sm leading-relaxed">
              {organization.name}
              <br />
              {organization.address.city} · {organization.address.state}
            </p>
          </div>

          <nav aria-label={layoutText.footerNavigationLabel} className="contents">
            {footerNavigation.map((group) => (
              <div key={group.title} className="flex flex-col gap-2.5 text-sm">
                <h2 className={footerTitleClasses}>{group.title}</h2>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className={footerLinkClasses}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 text-sm">
            <h2 className={footerTitleClasses}>{layoutText.contactTitle}</h2>
            <address className="flex flex-col gap-2.5 not-italic">
              <span>
                {formatAddressLines(organization.address).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              {organization.phones.map((phone) => (
                <a key={phone.international} href={`tel:${phone.international}`} className={footerLinkClasses}>
                  <span className="sr-only">{phone.label}: </span>
                  {phone.display}
                </a>
              ))}
              <a href={`mailto:${organization.email}`} className={footerLinkClasses}>
                {organization.email}
              </a>
            </address>

            {organization.socialLinks.length > 0 && (
              <ul aria-label={layoutText.socialTitle} className="mt-2 flex gap-2">
                {organization.socialLinks.map((social) => (
                  <li key={social.network}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-primary-line text-surface transition-colors hover:bg-primary"
                    >
                      <Icon name={social.network} size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <p className="border-t border-primary-line pt-6 text-[13px] text-ink-inverse">
          {layoutText.copyright(currentYear, organization.name)}
          {organization.taxId && ` · ${layoutText.taxIdLabel} ${organization.taxId}`}
        </p>
      </Container>
    </footer>
  )
}
