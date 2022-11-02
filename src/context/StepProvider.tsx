import React, { Dispatch, useMemo, SetStateAction, useContext } from "react";
import { useState } from "react";

enum TypeStepEnum {
  STEP1 = "STEP1",
}

const StepContext = React.createContext<{
  step: TypeStepEnum;
  handler: { setStep?: Dispatch<SetStateAction<TypeStepEnum>> };
}>({
  step: TypeStepEnum.STEP1,
  handler: {
    setStep: undefined,
  },
});

interface StepProviderI {
  children: React.ReactNode;
}

const StepProvider = ({ children }: StepProviderI) => {
  //! State
  const [step, setStep] = useState(TypeStepEnum.STEP1);

  //!Function
  const handler = useMemo(() => {
    return {
      setStep,
    };
  }, [setStep]);

  //! Render
  return <StepContext.Provider value={{ step, handler }}>{children}</StepContext.Provider>;
};

export const useStepExam = () => useContext(StepContext);
export default StepProvider;
