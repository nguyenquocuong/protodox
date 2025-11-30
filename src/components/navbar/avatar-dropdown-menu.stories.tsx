import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";
import { screen } from "storybook/test";
import messages from "@/messages/en.json";
import AvatarDropdownMenu from "./avatar-dropdown-menu";

const meta = {
  component: AvatarDropdownMenu,
  title: "Components/Navbar/AvatarDropdownMenu",
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof AvatarDropdownMenu>;

export default meta;
type Story = StoryObj<typeof AvatarDropdownMenu>;

export const Default: Story = {};

export const Active: Story = {
  play: async ({ userEvent }) => {
    const avatar = screen.getByRole("button");
    await userEvent.click(avatar);
  },
};

export const ApprearanceHover: Story = {
  play: async ({ userEvent }) => {
    const avatar = screen.getByRole("button");
    await userEvent.click(avatar);

    const apprearance = screen.getByText(
      messages.AvatarDropdownMenu.apprearance.title,
    );
    await userEvent.hover(apprearance);
  },
};
