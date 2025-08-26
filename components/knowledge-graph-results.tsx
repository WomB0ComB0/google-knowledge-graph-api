import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Music, Film, Tv, Book, User, Building, MapPin, Calendar, Globe } from "lucide-react"
import Image from "next/image"

interface KnowledgeGraphData {
  "@context": {
    "@vocab": string
    goog: string
    resultScore: string
    detailedDescription: string
    EntitySearchResult: string
    kg: string
  }
  "@type": "ItemList"
  itemListElement: EntitySearchResult[]
}

interface EntitySearchResult {
  "@type": "EntitySearchResult"
  resultScore: number
  result: Entity
}

interface Entity {
  "@id": string
  "@type": string | string[]
  name: string
  description?: string
  url?: string
  image?: {
    contentUrl: string
    url: string
    license?: string
  }
  detailedDescription?: {
    articleBody: string
    url: string
    license: string
  }
}

function getEntityIcon(types: string | string[]) {
  const typeArray = Array.isArray(types) ? types : [types]

  if (typeArray.includes("Person")) return <User className="h-4 w-4" />
  if (
    typeArray.includes("MusicAlbum") ||
    typeArray.includes("MusicComposition") ||
    typeArray.includes("MusicRecording")
  )
    return <Music className="h-4 w-4" />
  if (typeArray.includes("Movie") || typeArray.includes("Film")) return <Film className="h-4 w-4" />
  if (typeArray.includes("TVSeries") || typeArray.includes("TVShow")) return <Tv className="h-4 w-4" />
  if (typeArray.includes("Book")) return <Book className="h-4 w-4" />
  if (typeArray.includes("Organization") || typeArray.includes("Corporation")) return <Building className="h-4 w-4" />
  if (typeArray.includes("Place") || typeArray.includes("City") || typeArray.includes("Country"))
    return <MapPin className="h-4 w-4" />
  if (typeArray.includes("Event")) return <Calendar className="h-4 w-4" />
  if (typeArray.includes("WebSite") || typeArray.includes("WebPage")) return <Globe className="h-4 w-4" />
  return <Star className="h-4 w-4" />
}

function getEntityTypeLabel(types: string | string[]) {
  const typeArray = Array.isArray(types) ? types : [types]

  if (typeArray.includes("Person")) return "Person"
  if (typeArray.includes("MusicAlbum")) return "Album"
  if (typeArray.includes("MusicComposition") || typeArray.includes("MusicRecording")) return "Song"
  if (typeArray.includes("Movie") || typeArray.includes("Film")) return "Movie"
  if (typeArray.includes("TVSeries") || typeArray.includes("TVShow")) return "TV Show"
  if (typeArray.includes("Book")) return "Book"
  if (typeArray.includes("Event")) return "Event"
  if (typeArray.includes("Organization") || typeArray.includes("Corporation")) return "Organization"
  if (typeArray.includes("Place")) return "Place"
  if (typeArray.includes("City")) return "City"
  if (typeArray.includes("Country")) return "Country"
  if (typeArray.includes("WebSite") || typeArray.includes("WebPage")) return "Website"
  if (typeArray.includes("CreativeWork")) return "Creative Work"

  // Fallback: use the most specific type that's not "Thing"
  const specificTypes = typeArray.filter((type) => type !== "Thing")
  if (specificTypes.length > 0) {
    return specificTypes[0].replace(/([A-Z])/g, " $1").trim()
  }

  return "Entity"
}

function formatResultScore(score: number): string {
  if (score >= 10000) return `${Math.round(score / 1000)}K`
  if (score >= 1000) return `${(score / 1000).toFixed(1)}K`
  return Math.round(score).toString()
}

export function KnowledgeGraphResults({ data }: { data: KnowledgeGraphData }) {
  // Sort by result score (highest first)
  const sortedResults = [...data.itemListElement].sort((a, b) => b.resultScore - a.resultScore)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sortedResults.map((item, index) => {
        const entity = item.result
        const entityTypes = entity["@type"]
        const typeLabel = getEntityTypeLabel(entityTypes)
        const icon = getEntityIcon(entityTypes)

        return (
          <Card key={entity["@id"] || index} className="group hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {icon}
                    <Badge variant="secondary" className="text-xs">
                      {typeLabel}
                    </Badge>
                    <Badge variant="outline" className="text-xs ml-auto">
                      <Star className="h-3 w-3 mr-1" />
                      {formatResultScore(item.resultScore)}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {entity.name}
                  </CardTitle>
                  {entity.description && <CardDescription className="mt-1">{entity.description}</CardDescription>}
                </div>
                {entity.image && (
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={entity.image.contentUrl || "/placeholder.svg"}
                        alt={entity.name}
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {entity.detailedDescription && (
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {entity.detailedDescription.articleBody.slice(0, 150)}
                  {entity.detailedDescription.articleBody.length > 150 && "..."}
                </p>
              )}

              <div className="flex gap-2">
                {entity.url && (
                  <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                    <a href={entity.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Visit
                    </a>
                  </Button>
                )}
                {entity.detailedDescription?.url && (
                  <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                    <a href={entity.detailedDescription.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Learn More
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
