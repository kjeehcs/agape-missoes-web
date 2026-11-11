import { PageMeta } from '@/components/layout/PageMeta'
import { AboutPreview } from '@/components/sections/home/AboutPreview'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { ImpactStats } from '@/components/sections/home/ImpactStats'
import { ProgramsPreview } from '@/components/sections/home/ProgramsPreview'
import { TransparencyCallout } from '@/components/sections/home/TransparencyCallout'
import { homeContent } from '@/data/home'
import { impactStats, institutional } from '@/data/institutional'
import { mainNavigation } from '@/data/navigation'
import { organization } from '@/data/organization'
import { programs } from '@/data/programs'

export function Component() {
  return (
    <>
      <PageMeta title={mainNavigation.home.label} description={organization.description} />
      <HeroSection content={homeContent.hero} />
      <ImpactStats label={homeContent.impactLabel} stats={impactStats} />
      <ProgramsPreview content={homeContent.programs} programs={programs} />
      <AboutPreview content={homeContent.about} values={institutional.values} />
      <TransparencyCallout content={homeContent.transparency} />
    </>
  )
}
