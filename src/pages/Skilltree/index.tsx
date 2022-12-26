import { ArticleFadeInContainer } from 'components/Layout/Article'
import { SkillTreeGroup, SkillTree, SkillProvider, SkillType } from 'beautiful-skill-tree'
// SKILLS
import COLLECTION from 'assets/collections/1/logo.png'
import ASCENDANCE from 'assets/collections/1/skills/ASCENDANCE.png'
import DAYDREAMING from 'assets/collections/1/skills/DAYDREAMING.png'
import ELLEX from 'assets/collections/1/skills/ELLEX.svg'
import REBIRTH from 'assets/collections/1/skills/REBIRTH.svg'
import VIRGIL from 'assets/collections/1/skills/VIRGIL.png'
import VOODOO from 'assets/collections/1/skills/VOODOO.svg'
// SKILLPOINT
import SKILLPOINT from 'assets/collections/1/skills/SKILLPOINT.svg'
import { Subheader } from 'components/Layout/Text'
import { customTheme } from './theme'

interface SkillTreeConfig {
  TITLE: string
  DESCRIPTION: string
  COLLAPSE: boolean
  ID: string
}
type TooltipContentProps = {
  tooltip: string
  imgProps: {
    src: string
    style: { [key: string]: string }
  }
}
function SkillTooltipContent({ tooltip, imgProps }: TooltipContentProps) {
  return (
    <div>
      <Subheader margin="0" fontWeight={100}>
        {tooltip}
      </Subheader>
      <img src={imgProps.src} style={{ maxWidth: '100%', ...imgProps.style }} />
    </div>
  )
}

const SKILLTREE_CONFIG: SkillTreeConfig = {
  TITLE: 'PASTELLE SKILLTREE',
  DESCRIPTION: 'SKILLTREE FOR LEVELLING UP SKILLPOINTS TO UNLOCK COMPLETELY UNIQUE PIECES',
  ID: 'PSTL-SKILLTREE',
  COLLAPSE: false
}

const data: SkillType[] = [
  {
    id: 'PSTL-COLLECTION-1-GENE$IS',
    title: 'GENE$IS',
    icon: COLLECTION,
    tooltip: {
      content: <img src={COLLECTION} style={{ maxWidth: '100%' }} />
    },
    children: [
      {
        id: 'COLLECTION-1-SKILL-ASCENDANCE',
        title: 'ASCENDANCE',
        icon: ASCENDANCE,
        tooltip: {
          content: <SkillTooltipContent tooltip="DIE.ASCEND.BECOME." imgProps={{ src: ASCENDANCE, style: {} }} />
        },
        children: [
          {
            id: '1.1-ASCENDANCE-GODLY',
            title: 'GODLY',
            tooltip: {
              content: (
                <SkillTooltipContent
                  tooltip="TRANSCEND ASCENDANCE AND BECOME... GODLY."
                  imgProps={{ src: ASCENDANCE, style: { filter: 'invert(1)' } }}
                />
              )
            },
            children: []
          }
        ]
      },
      {
        id: 'COLLECTION-1-SKILL-DAYDREAMING',
        title: 'DAYDREAMING',
        icon: DAYDREAMING,
        tooltip: {
          content: (
            <SkillTooltipContent
              tooltip="DAYDREAM, I FEEL ASLEEP BENEATH THE FLOWERS..."
              imgProps={{ src: DAYDREAMING, style: {} }}
            />
          )
        },
        children: [
          {
            id: 'SKILL-1.1-DAYDREAMING-NIGHTMARE',
            title: 'NIGHTMARE',
            tooltip: {
              content: (
                <SkillTooltipContent
                  tooltip="NIGHTMARE, I FEEL ASLEEP BENEATH THE FOUNTAIN OF BLOOD..."
                  imgProps={{ src: DAYDREAMING, style: { filter: 'invert(1)' } }}
                />
              )
            },
            children: []
          }
        ]
      },
      {
        id: 'COLLECTION-1-SKILL-ELLEX',
        title: 'ELLEX',
        icon: ELLEX,
        tooltip: {
          content: <SkillTooltipContent tooltip="ALWAYS WATCHING. SMILING." imgProps={{ src: ELLEX, style: {} }} />
        },
        children: [
          {
            id: '1.1-ELLEX-SKILL-TRILL',
            title: 'TRILL',
            tooltip: {
              content: (
                <SkillTooltipContent
                  tooltip="TRILL, BOW DOWN TO THE TRILL"
                  imgProps={{ src: ELLEX, style: { filter: 'invert(1)' } }}
                />
              )
            },
            children: []
          }
        ]
      },
      {
        id: 'PSTL-COLLECTION-1-SKILL-REBIRTH',
        title: 'REBIRTH',
        icon: REBIRTH,
        tooltip: {
          content: <SkillTooltipContent tooltip="VENUS REBORN." imgProps={{ src: REBIRTH, style: {} }} />
        },
        children: [
          {
            id: '1.1-REBIRTH-SPACE',
            title: 'SPACE',
            tooltip: {
              content: (
                <SkillTooltipContent
                  tooltip="REBORN IN SPACE, WITNESS SUPERNOVAE"
                  imgProps={{ src: REBIRTH, style: { filter: 'invert(1)' } }}
                />
              )
            },
            children: []
          }
        ]
      },
      {
        id: 'PSTL-COLLECTION-1-SKILL-VIRGIL',
        title: 'VIRGIL',
        icon: VIRGIL,
        tooltip: {
          content: (
            <SkillTooltipContent
              tooltip="DANTE LEADETH VIRGIL DOWN, AND DOWN, AND DOWN..."
              imgProps={{ src: VIRGIL, style: {} }}
            />
          )
        },
        children: [
          {
            id: '1.1-VIRGIL-SKILL-DANTE',
            title: 'DANTE',
            tooltip: {
              content: (
                <SkillTooltipContent
                  tooltip="AND DOWN, AND DOWN... UNTIL HIM."
                  imgProps={{ src: VIRGIL, style: { filter: 'invert(1)' } }}
                />
              )
            },
            children: []
          }
        ]
      },
      {
        id: 'PSTL-COLLECTION-1-SKILL-VOODOO',
        title: 'VOODOO',
        icon: VOODOO,
        tooltip: {
          content: <SkillTooltipContent tooltip="1400ug. FRACTALING." imgProps={{ src: VOODOO, style: {} }} />
        },
        children: [
          {
            id: '1.1-VOODOO-SKILL-WITCH',
            title: 'WITCH',
            tooltip: {
              content: (
                <SkillTooltipContent
                  tooltip="WITCH WITCH WITCH"
                  imgProps={{ src: VOODOO, style: { filter: 'invert(1)' } }}
                />
              )
            },
            children: []
          }
        ]
      }
    ]
  }
]

export default function SkilltreePage() {
  return (
    <ArticleFadeInContainer>
      <SkillProvider>
        <SkillTreeGroup theme={undefined}>
          {skillProps => {
            console.debug('SKILLCOUNT', skillProps)
            return (
              <SkillTree
                treeId={SKILLTREE_CONFIG.ID}
                title={SKILLTREE_CONFIG.TITLE}
                data={data}
                collapsible={SKILLTREE_CONFIG.COLLAPSE}
                description={SKILLTREE_CONFIG.DESCRIPTION}
              />
            )
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </ArticleFadeInContainer>
  )
}
