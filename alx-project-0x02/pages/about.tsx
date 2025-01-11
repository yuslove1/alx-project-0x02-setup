import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div>
      <h1>Hi, this is the About page (/about)</h1>

      <Button
        text="Button 1"
        size="small"
        shape="rounded-sm"
        onClick={() => alert("You clicked me(Button-1)!")}
      />
      <Button
        text="Button 2"
        size="medium"
        shape="rounded-md"
        onClick={() => alert("You clicked me(Button-2)!")}
      />
      <Button
        text="Button 3"
        size="large"
        shape="rounded-full"
        onClick={() => alert("You clicked me(Button-3)!")}
      />
    </div>
  );
};

export default About;
