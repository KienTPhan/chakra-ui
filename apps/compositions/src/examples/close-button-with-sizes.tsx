import { For, HStack } from "@chakra-ui/react"
import { CloseButton } from "compositions/ui/close-button"

export const CloseButtonWithSizes = () => {
  return (
    <HStack gap="4" wrap="wrap">
      <For each={["2xs", "xs", "sm", "md", "lg", "xl"]}>
        {(size) => <CloseButton variant="outline" size={size} />}
      </For>
    </HStack>
  )
}